class RoomsController < ApplicationController
    skip_before_action :check_user
    def index
        rooms = Room.all
        render json: rooms
    end
   
    def show
        rooms = Room.find(params[:id])
        render json: rooms
    end
end
