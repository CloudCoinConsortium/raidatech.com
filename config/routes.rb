Rails.application.routes.draw do
  get 'solutions/collectibles'
  get 'solutions/consumables'
  get 'solutions/digital_cash'
  get 'solutions/digital_securities'
  get 'welcome/index'
  get 'welcome/faq'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
