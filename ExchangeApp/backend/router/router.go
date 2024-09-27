package router

import "C"
import (
	"ExchangeAppBack/controllers"
	"ExchangeAppBack/middlewares"
	"github.com/gin-gonic/gin"
)

func SetupRouter() *gin.Engine {
	r := gin.Default()

	auth := r.Group("/api/auth")
	{
		auth.POST("/login", controllers.Login)
		auth.POST("/register", controllers.Register)
	}

	api := r.Group("/api")
	//获取数据，不需要注册和登陆
	api.GET("exchangeRates", controllers.GetExchangeRates)
	api.Use(middlewares.AuthMiddleWare())
	{
		//下面的需要注册和登陆
		api.POST("/exchangeRates", controllers.CreateExchangeRate)
		api.POST("/articles", controllers.CreateArticle)
		api.GET("/articles", controllers.GetArticles)
		api.GET("/articles/:id", controllers.GetArticleByID)

		api.POST("/articles/:id/like", controllers.LikeArticle)
		api.GET("/articles/:id/like", controllers.GetArticleLikes)
	}

	return r
}
