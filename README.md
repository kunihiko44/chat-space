## usersテーブル

|column|Type|Option|
|------|----|------|
|name|string|index: true, null: false, unique: true|
|mail|string|null: false|

### Association
- has_many :groups, through: members
- has_many :messages
- has_many :members


## groupsテーブル

|column|Type|Option|
|------|----|------|
|name|string|null: false, unique: true|

### Association
- has_many :users, through: members
- has_many :messages
- has_many :members


## menbersテーブル

|column|Type|Option|
|------|----|------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null:false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group


## messagesテーブル

|column|Type|Option|
|------|----|------|
|body|text|index:true|
|image|string|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

