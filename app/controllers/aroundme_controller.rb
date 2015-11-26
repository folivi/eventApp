class AroundmeController < ApplicationController

  respond_to :html, :json
  def index
    @events = Event.all

    if params[:longitude] && params[:latitude]
      @events = Event.limit(10)
    end

    respond_with @events
  end
end
