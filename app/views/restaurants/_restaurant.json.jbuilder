json.extract! restaurant, :id, :name, :cuisine, :tenbis, :address, :max_delivery_time, :created_at, :updated_at, :rating
json.url restaurant_url(restaurant, format: :json)
