import { useEffect, useState } from 'react'
import Module from "./Module"
import Modules from "../../assets/modules.json"

export default function ModuleList() {

    return (
        <div className="Modules">
          {Modules.data.map((value, index) => (
            <Module
              key={index}
              Little={value.title}
              Desc={value.description}
              level={value.level}
              id={index}
            />
          ))}
        </div>
      );
}