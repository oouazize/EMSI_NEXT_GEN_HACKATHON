# About The Model:
# We chose to use the h2oai-gpt-falcon-7b model to train locally,
# becouse it offers beter security and customizability.
# we can always update to more powerful models whene better resources are available.

TRAIN_LOCALY = False

llm = None
if TRAIN_LOCALY:
    # imports
    import torch
    from typing import List
    from langchain.llms import HuggingFacePipeline
    from transformers import (
        AutoModelForCausalLM,
        AutoTokenizer,
        StoppingCriteria,
        StoppingCriteriaList,
        pipeline,
    )

    # MODEL_NAME = "tiiuae/falcon-40b" # example for better model
    MODEL_NAME = "h2oai/h2ogpt-gm-oasst1-en-2048-falcon-7b-v3"

    # Load The Model
    tokenizer = AutoTokenizer.from_pretrained(MODEL_NAME)
    model = AutoModelForCausalLM.from_pretrained(
        MODEL_NAME,
        load_in_4bit=True,
        trust_remote_code = True,
        device_map = "auto",
    )
    model.eval()

    # StoppingCriteria technique (Some pretection against the model going crazy)
    class StopGenerationCriteria(StoppingCriteria):
        def __init__(self, tokens: List[List[str]], tokenizer: AutoTokenizer, device: torch.device):
            stop_token_ids = [tokenizer.convert_tokens_to_ids(token) for token in tokens]
            self.stop_token_ids = [torch.tensor(x, dtype=torch.long, device=device) for x in stop_token_ids]

        def __call__(self, input_ids: torch.LongTensor, _: torch.FloatTensor, **kwargs) -> bool:
            for stop_ids in self.stop_token_ids:
                if torch.eq(input_ids[0][-len(stop_ids) :], stop_ids).all():
                    return True
            return False

    stop_tokens = [["Human", ":"], ["AI", ":"]]
    stopping_criteria = StoppingCriteriaList([StopGenerationCriteria(stop_tokens, tokenizer, model.device)])

    # Custom Configurations
    generation_config = model.generation_config
    generation_config.temperature = 0
    generation_config.num_return_sequences = 1
    generation_config.max_new_tokens = 256
    generation_config.use_cache = False
    generation_config.repetition_penalty = 1.7
    generation_config.pad_token_id = tokenizer.eos_token_id
    generation_config.eos_token_id = tokenizer.eos_token_id

    # Pipeline
    generation_pipeline = pipeline(
        model=model,
        tokenizer=tokenizer,
        return_full_text=True,
        task="text-generation",
        generation_config=generation_config,
        stopping_criteria=stopping_criteria,
    )

    llm = HuggingFacePipeline(pipeline=generation_pipeline)
else:
    # use openAI API instead
    from dotenv import load_dotenv
    from langchain.llms import OpenAI

    load_dotenv()

    llm = OpenAI()