from sqlite3.dbapi2 import Connection
import numpy
from sklearn.cluster import KMeans

# Use KMeans to cluster users based on their skills
def skills(con: Connection) -> numpy.ndarray:
    cur = con.cursor()
    cur.execute("SELECT * FROM User")
    users = cur.fetchall()

    data_points = numpy.array(users)[:, 2:]
    data_points = data_points.astype('float64')

    kmeans = KMeans(n_clusters=10, n_init='auto').fit(data_points)

    return kmeans.labels_