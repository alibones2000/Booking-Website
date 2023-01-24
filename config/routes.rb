Rails.application.routes.draw do
  
  resources :information
  resources :images
  resources :booking_rooms
  resources :payments
  resources :bookings
  resources :rooms
  resources :hotels
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get '/me', to: "users#show"
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  post "/login", to: "sessions#create"
  post "/signup", to: "users#create"
  delete "/logout", to: "sessions#destroy"
  # get "/reserve_room/:id", to: "rooms" 
  get "/search", to: "hotels#search"
 
end
