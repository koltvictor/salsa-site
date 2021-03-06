Rails.application.routes.draw do

  namespace :api do 

    resources :products
    resources :users, only: [:create, :show]
    get '/menu', to: 'products#index'
    post '/signup', to: 'users#create'
    

  end
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end