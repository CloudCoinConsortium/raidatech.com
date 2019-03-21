# == Route Map
#
#                       Prefix Verb URI Pattern                                                                              Controller#Action
#                         root GET  /                                                                                        welcome#index
#       solutions_collectibles GET  /solutions/collectibles.html(.:format)                                                   solutions#collectibles
#        solutions_consumables GET  /solutions/consumables.html(.:format)                                                    solutions#consumables
#       solutions_digital_cash GET  /solutions/digital_cash.html(.:format)                                                   solutions#digital_cash
# solutions_digital_securities GET  /solutions/digital_securities.html(.:format)                                             solutions#digital_securities
#                        index GET  /index.html(.:format)                                                                    welcome#index
#                          faq GET  /faq.html(.:format)                                                                      welcome#faq
#           rails_service_blob GET  /rails/active_storage/blobs/:signed_id/*filename(.:format)                               active_storage/blobs#show
#    rails_blob_representation GET  /rails/active_storage/representations/:signed_blob_id/:variation_key/*filename(.:format) active_storage/representations#show
#           rails_disk_service GET  /rails/active_storage/disk/:encoded_key/*filename(.:format)                              active_storage/disk#show
#    update_rails_disk_service PUT  /rails/active_storage/disk/:encoded_token(.:format)                                      active_storage/disk#update
#         rails_direct_uploads POST /rails/active_storage/direct_uploads(.:format)                                           active_storage/direct_uploads#create

Rails.application.routes.draw do
  root "welcome#index"
  get 'solutions/collectibles.html', to: "solutions#collectibles", as: "solutions_collectibles"
  get 'solutions/consumables.html', to: "solutions#consumables", as: "solutions_consumables"
  get 'solutions/digital_cash.html', to: "solutions#digital_cash", as: "solutions_digital_cash"
  get 'solutions/digital_securities.html', to: "solutions#digital_securities", as: "solutions_digital_securities"
  get 'index.html', to: "welcome#index", as: "index"
  get 'faq.html', to: "welcome#faq", as: "faq"
  # get 'welcome/faq'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
