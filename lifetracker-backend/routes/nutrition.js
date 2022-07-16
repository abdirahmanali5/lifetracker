const express = require("express")
const nutrition = require("../models/nutrition")
const router = express.Router()
const security = require("../middleware/security")
const permissions = require("../middleware/permissions")


router.post("/",security.requireAuthenticatedUser, async (req, res, next) => {
    try {
    const {user} = res.locals
    console.log("line 11")
    const post = await nutrition.createNewNutrition({ user, Post: req.body})
      return res.status(201).json({ post })
    } catch (err) {
      next(err)
    }
  })

  router.get("/:postId",async (req, res, next) => {
    try {
    const user = req.params
    // console.log("user: ",req.params)
    const post = await nutrition.fetchPostbyId({ user })
      return res.status(201).json({ post })
    } catch (err) {
      next(err)
    }
  })

  router.patch("/:postId",security.requireAuthenticatedUser,permissions.authUserOwnsPost, async (req, res, next) => {
    try {
    const {user} = req.params
    const post = await nutrition.editPost({ postUpdate: req.body, postId})
      return res.status(201).json({ post })
    } catch (err) {
      next(err)
    }
  })
  router.get("/",async (req, res, next) => {
    try {
      // const user = res.locals.user
    const posts1 = nutrition.listPosts()
      return res.status(201).json({ posts1 })
    } catch (err) {
      next(err)
    }
  })








module.exports = router;