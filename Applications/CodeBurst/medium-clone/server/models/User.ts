import mongoose from 'mongoose';

let UserSchema = new mongoose.Schema(
	{
		name: String,
		email: String,
		provider: String,
		providerId: String,
		token: String,
		providerPic: String,
		followers: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'User'
			}
		],
		following: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'User'
			}
		]
	}
);

UserSchema.methods.follow = function (userId: any) {
	if (this.following.indexOf(userId) === -1) {
		this.following.push(userId);
	}
	return this.save();
}

UserSchema.methods.addFollower = function (user: any) {
	this.followers.push(user);
}

module.exports = mongoose.model('User', UserSchema);
