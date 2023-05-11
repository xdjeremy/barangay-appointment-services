migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7aq2qxxirrlelde")

  collection.createRule = "@request.data.id = @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7aq2qxxirrlelde")

  collection.createRule = null

  return dao.saveCollection(collection)
})
