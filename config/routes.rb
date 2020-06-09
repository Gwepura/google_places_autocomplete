Rails.application.routes.draw do
  resources :autocompletes
  root to: 'autocompletes#new'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
