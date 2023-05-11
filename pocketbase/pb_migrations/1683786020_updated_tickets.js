migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0y4vr5nnjy0ahrj")

  collection.createRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0y4vr5nnjy0ahrj")

  collection.createRule = null

  return dao.saveCollection(collection)
})
