Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  resources :users, only: [:index, :create]
  
  resources :coffees, only: [:index, :show] do
    resources :reviews, only: [:index, :show]
  end

  resources :reviews, only: [:index, :show, :create, :update, :destroy]

  post "/login", to: "sessions#create"
  # This login goes to our sessions controller and we move it to our create action
  get "/auth", to: "users#show" 
  delete "/users/:id", to: 'sessions#destroy'
end
