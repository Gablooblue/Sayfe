class SafetyChecksController < ApplicationController
    before_action :set_safety_check, only: [:show, :edit, :update, :destroy]


    # GET /safety_checks/1
    # GET /safety_checks/1.json
    def show
    end

    # GET /safety_checks/new
    def new
	@safety_check = SafetyCheck.new
    end

    # GET /safety_checks/1/edit
    def edit
    end

    # POST /safety_checks
    # POST /safety_checks.json
    def create
	@safety_check = current_user.safety_checks.new(safety_check_params)

	respond_to do |format|
	    if @safety_check.save
		format.html { redirect_to :back, notice: 'Safety check was successfully created.' }
		format.json { render :back, status: :created, location: @safety_check }
	    else
		format.html { render :back, notice: "Error in sending safety check" }
		format.json { render json: @safety_check.errors, status: :unprocessable_entity }
	    end
	end
    end

    # PATCH/PUT /safety_checks/1
    # PATCH/PUT /safety_checks/1.json
    def update
	respond_to do |format|
	    if @safety_check.update(safety_check_params)
		format.html { redirect_to :back, notice: 'Safety check was successfully updated.' }
		format.json { render :back, status: :ok, location: @safety_check }
	    else
		format.html { render :back, notice: "Error in responding to safety check"}
		format.json { render json: @safety_check.errors, status: :unprocessable_entity }
	    end
	end
    end

    # DELETE /safety_checks/1
    # DELETE /safety_checks/1.json
    def destroy
	@safety_check.destroy
	respond_to do |format|
	    format.html { redirect_to safety_checks_url, notice: 'Safety check was successfully destroyed.' }
	    format.json { head :no_content }
	end
    end

    private
    # Use callbacks to share common setup or constraints between actions.
    def set_safety_check
	@safety_check = SafetyCheck.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def safety_check_params
	params.permit(:id, :res,:user_id, :receiver_id)
    end
end
