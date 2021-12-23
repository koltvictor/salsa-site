Rails.application.routes.draw do

  namespace :api do 

    resources :products, only: [:index]
    resources :users
    

  end
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end