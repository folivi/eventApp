class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :eid, :longitude, :latitude, :slug, :country_code, :start_time, :end_time
end
