const { User, Thought } = require('../models');

const userController = {

//get all the users

  async getUsers(req, res) {
    try {
      const dbUserData = await User.find()
      .select('-_v')
      
      res.json(dbUsersData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  //get single user by id
  async getSingleUser(req, res) {
    try {
      const dbUserData = await User.findOne({ _id: req.params.userId })
        .select('-_v')
        .populate('friends')
        .populate('thoughts');
        
      if (!dbUserData) {
        return res.status(404).json({ message: 'No user with that Id!' });
      }

      res.json(dbUserData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // create a new user
  async createUser(req, res) {
    try {
      const dbUserData = await User.create(req.body);
      res.json(dbUserData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //update a user
  async updateUser(req, res) {
    try {
        const dbUserData = await User.findOneAndUpdate(
        {_id:req.params.userId },
        {
          $set: req.body,
        },
        {
        runValidators: true,
        new: true,
        }
        );
        
        if(!dbUserData) {
        return res.status(404).json({ message: 'No user with this id!'});
        }        
        
        res.json(dbUserData);
        } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
  },
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId });

      if (!user) {
        return res.status(404).json({ message: 'No user with that id!' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
// Delete user and delete associated thoughts
  
  async deleteUser(req, res) {
    try {
      const dbUserData = await 
      User.findOneAndDelete({ _id: req.params.userId })
      
      if(!dbUserData) {
        return res.status(404).json({ message: 'No user with that id!' });
      }

//Get ids of user's thoughts and delete them all
      
        await Thoughts.deleteMany({ _id: { $in:
         dbUserData.thoughts }});
        res.json({ message: 'User and associeted thoughts deleted!'});
        } catch (err) {
        console.log(err);
         res.status(500).json(err);
    }
  },

//add friend to friend list
async addFriend(req, res) {
    try {
      const dbUserData = await 
      User.findOneAndUpdate({ _id: req.params.userId },
      { $addToSet: {friends: req.params.friendId } }, {
      new: true });
      
        
      if(!dbUserData) {
        return res.status(404).json({ message: 'No user with that id!' });
      }
      res.json(dbUserData);
      } catch (err) {
      console.log(err);
      res.status(500).json(err);
       }
    },
//remove friend to friend list   
async removeFriend(req, res) {
    try {
      const dbUserData = await 
      User.findOneAndUpdate({ _id: req.params.userId },
      { $pull: {friends: req.params.friendId } }, {
      new: true });
      
      if(!dbUserData) {
        return res.status(404).json({ message: 'No user with this id!' });
      }
      
      res.json(dbUserData);
      } catch (err) {
      console.log(err);
      res.status(500).json(err);
       }
    },
};
module.exports = userController;
