json.content @message.content
json.date @message.created_at.strftime("%Y/%m/%d %H:%M")
json.user_name @message.user.name
json.id @message.id
json.image @message.image