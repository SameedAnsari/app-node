curl --request GET \
  --url http://localhost:3000/request/file \
  --header 'token: Access_Pass'

curl --request POST \
  --url http://localhost:3000/upload \
  --header 'Content-Type: multipart/form-data; boundary=---011000010111000001101001' \
  --header 'token: Access_Pass' \
  --form data=@/home/hp/Desktop/ordersData.json