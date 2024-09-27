package config

import (
	"github.com/spf13/viper"
	"log"
)

type App struct {
	Name string
	Port string
}

type Database struct {
	Dsn          string
	MaxIdleConns int
	MaxOpenConns int
}

type Redis struct {
	Addr     string
	DB       int
	Password string
}

type Config struct {
	App      App
	Database Database
	Redis    Redis
}

var AppConfig *Config

func InitConfig(configName string, path string) {
	viper.SetConfigName(configName)
	viper.SetConfigType("yml")
	viper.AddConfigPath(path)
	err := viper.ReadInConfig()
	if err != nil {
		log.Fatalln("Error reading config file:", err)
	}
	AppConfig = &Config{}

	err = viper.Unmarshal(AppConfig)
	if err != nil {
		log.Fatalf("Unable to decode into struct: %v", err)
	}

	initDB()
	initRedis()
}
