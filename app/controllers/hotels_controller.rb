class HotelsController < ApplicationController
    skip_before_action :check_user
    def index 
    hotels = Hotel.all
    render json: hotels
end

    def show
    hotel = Hotel.find(params[:id])
    render json: hotel
    end

    def search
            # @parameter = params[:search].downcase
            # @results = Hotel.all.where("lower(location) LIKE :search", search: "%#{@parameter}%")
        #    byebug
            search = params[:location]
            all_hotels = Hotel.all
            search_hotels = all_hotels.where("lower(location) = ?" , search.downcase)
            render json: search_hotels
    end
end
