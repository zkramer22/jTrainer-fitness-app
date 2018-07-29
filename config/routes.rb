Rails.application.routes.draw do
  get 'sessions/create'

  get 'sessions/destroy'

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create]
  end

  root to: "static_pages#root"
end
