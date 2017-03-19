class DisastersController < ApplicationController
  before_action :set_disaster, only: [:show, :update, :destroy]

  # GET /disasters
  def index
    @disasters = Disaster.all

    render json: @disasters
  end

  # GET /disasters/1
  def show
    render json: @disaster
  end

  # POST /disasters
  def create
    @disaster = Disaster.new(disaster_params)

    if @disaster.save
      render json: @disaster, status: :created, location: @disaster
    else
      render json: @disaster.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /disasters/1
  def update
    if @disaster.update(disaster_params)
      render json: @disaster
    else
      render json: @disaster.errors, status: :unprocessable_entity
    end
  end

  # DELETE /disasters/1
  def destroy
    @disaster.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_disaster
      @disaster = Disaster.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def disaster_params
      params.require(:disaster).permit(:title, :desc)
    end
end
