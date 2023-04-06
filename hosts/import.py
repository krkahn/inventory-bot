import yaml
from pymongo import MongoClient

# Read the data from the YAML file
with open('hosts.yaml', 'r') as f:
    data = yaml.safe_load(f)

# Connect to MongoDB
client = MongoClient('mongodb://localhost:27017/')
db = client.inventory

# Insert the data into the "hosts" collection
hosts = db.hosts
for host in data:
    hosts.insert_one(host)

