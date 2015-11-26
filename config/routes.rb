Rails.application.routes.draw do
  get 'aroundme', to: 'aroundme#index', as: 'aroundme'

  resources :events
  root to: "aroundme#index"

end
