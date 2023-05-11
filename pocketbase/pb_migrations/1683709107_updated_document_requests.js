migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kzpgfaji9ms9z9r")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pvppwkym",
    "name": "email",
    "type": "email",
    "required": true,
    "unique": false,
    "options": {
      "exceptDomains": [],
      "onlyDomains": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kzpgfaji9ms9z9r")

  // remove
  collection.schema.removeField("pvppwkym")

  return dao.saveCollection(collection)
})
