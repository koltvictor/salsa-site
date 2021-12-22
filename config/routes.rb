Rails.application.routes.draw do
  
  get '/hello', to: 'application#hello_world'

  namespace :api do 

    

  end
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end