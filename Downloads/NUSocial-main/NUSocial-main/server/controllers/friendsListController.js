const db = require('../models')



// create main Model
const FriendsList = db.friendsList


const addFriend = async (req, res) => {
    let info = {
        friendUsername: req.body.friendUsername,
        reqStatus: "pending",
    }
    const friendReq = await FriendsList.create(info)
    res.status(200).send(friendReq)
    console.log(friendReq)
}



// 2. get all products

const getAllFriends = async (req, res) => {
    let friends = await FriendsList.findAll({})
    res.status(200).send(friends)
}

// 3. set Chat Table Id

const setChatId = async (req, res) => {
    let info = {
        friendUsername: req.body.chat,
    }
    const addChat = await FriendsList.create(info)
    res.status(200).send(friendReq)
}



module.exports = {
    addFriend,
    getAllFriends,
    setChatId
}
