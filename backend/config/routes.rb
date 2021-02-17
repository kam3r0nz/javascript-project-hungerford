Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :songs
      resources :users
    end
  end
end
