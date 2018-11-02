import axios from "axios";

export default {

    // Save an article to the database
    saveArticle: function() {
        return axios.post("/api/articles")
    },

    // Get all saved articles
    getArticles: function() {
        return axios.get("/api/articles");
    }

};