migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kzpgfaji9ms9z9r")

  collection.createRule = "user = @request.data.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kzpgfaji9ms9z9r")

  collection.createRule = null

  return dao.saveCollection(collection)
})
