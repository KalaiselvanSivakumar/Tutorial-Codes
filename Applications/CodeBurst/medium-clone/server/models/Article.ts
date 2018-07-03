import mongoose from 'mongoose';

let ArticleSchema = new mongoose.Schema(
	{
		text: String,
		title: String,
		description: String,
		featureImg: String,
		claps: Number,
		author: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User'
		},
		comments: [
			{
				author: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'User'
				},
				text: String
			}
		]
	}
);

ArticleSchema.methods.clap = function () {
	this.claps++;
	return this.save();
}

ArticleSchema.methods.comment = function (comment: any) {
	this.comments.push(comment);
	return this.save();
}

ArticleSchema.methods.addAuthor = function (authorId: any) {
	this.author = authorId;
	return this.save();
}

ArticleSchema.methods.getUserArticle = function (id: any) {
	Article.find({
		'author': id
	})
	.then((article: any) => {
		return article;
	})
}

let Article = mongoose.model('Article', ArticleSchema);
module.exports = Article;
