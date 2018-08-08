Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create]
    resources :programs
    resources :exercises
    resources :weeks
    resources :program_exercises, only: [:create, :destroy]
  end

  root to: "static_pages#root"
end
