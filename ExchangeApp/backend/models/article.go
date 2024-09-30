package models

import "gorm.io/gorm"

type Article struct {
	gorm.Model
	Title   string `binging:"required"`
	Content string `binging:"required"`
	Preview string `binging:"required"`
}
