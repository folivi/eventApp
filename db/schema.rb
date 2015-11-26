# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20151126174229) do

  create_table "events", force: :cascade do |t|
    t.string   "name"
    t.text     "description"
    t.datetime "start_time"
    t.datetime "end_time"
    t.string   "eid"
    t.string   "picture"
    t.string   "image"
    t.text     "venue"
    t.text     "location"
    t.string   "city"
    t.string   "country"
    t.string   "country_code"
    t.decimal  "longitude"
    t.decimal  "latitude"
    t.string   "website"
    t.boolean  "sandbox",                 default: true
    t.string   "timezone"
    t.string   "slug"
    t.string   "owner_fb_id"
    t.string   "sale_notification_email"
    t.integer  "event_type_id"
    t.datetime "created_at",                             null: false
    t.datetime "updated_at",                             null: false
  end

  add_index "events", ["country"], name: "index_events_on_country"
  add_index "events", ["country_code"], name: "index_events_on_country_code"
  add_index "events", ["end_time"], name: "index_events_on_end_time"
  add_index "events", ["name"], name: "index_events_on_name"
  add_index "events", ["slug"], name: "index_events_on_slug", unique: true
  add_index "events", ["start_time"], name: "index_events_on_start_time"

end
