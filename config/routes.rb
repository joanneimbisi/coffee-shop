Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!

  resources :users, only: [:index, :create]
  
  resources :coffees, only: [:index, :show] do
    resources :reviews, only: [:index, :show]
  end
  
  resources :reviews, only: [:index, :show, :create, :update, :destroy]

  get '/users/review_length/:n', to: "users#review_length"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"

  get "/auth", to: "users#show" 
  delete "/users/:id", to: 'sessions#destroy'
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
