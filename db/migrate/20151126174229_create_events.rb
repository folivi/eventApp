class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :name
      t.text :description
      t.datetime :start_time
      t.datetime :end_time
      t.string :eid
      t.string :picture
      t.string :image
      t.text :venue
      t.text :location
      t.string :city
      t.string :country
      t.string :country_code
      t.decimal :longitude
      t.decimal :latitude
      t.string :website
      t.boolean :sandbox, default: true
      t.string :timezone
      t.string :slug
      t.string :owner_fb_id
      t.string :sale_notification_email

      t.references :event_type

      t.timestamps null: false
    end
    add_index :events, :slug, unique: true
    add_index :events, :name
    add_index :events, :start_time
    add_index :events, :end_time
    add_index :events, :country
    add_index :events, :country_code
  end
end
