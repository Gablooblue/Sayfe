class GroupChecksController < ApplicationController
  before_action :set_group_check, only: [:show, :edit, :update, :destroy]


  # POST /group_checks
  # POST /group_checks.json
  def create
    @group_check = GroupCheck.new(group_check_params)

    respond_to do |format|
      if @group_check.save
        format.html { redirect_to @group_check, notice: 'Group check was successfully created.' }
        format.json { render :show, status: :created, location: @group_check }
      else
        format.html { render :new }
        format.json { render json: @group_check.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /group_checks/1
  # PATCH/PUT /group_checks/1.json
  def update
    respond_to do |format|
      if @group_check.update(group_check_params)
        format.html { redirect_to @group_check, notice: 'Group check was successfully updated.' }
        format.json { render :show, status: :ok, location: @group_check }
      else
        format.html { render :edit }
        format.json { render json: @group_check.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /group_checks/1
  # DELETE /group_checks/1.json
  def destroy
    @group_check.destroy
    respond_to do |format|
      format.html { redirect_to group_checks_url, notice: 'Group check was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def check_group
    @members = User.in_group(id: params[:id])

    @members.each do |member|
	GroupCheck.create(id: member.id)
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_group_check
      @group_check = GroupCheck.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def group_check_params
      params.require(:group_check).permit(:group_id, :receiver_id, :res)
    end

end
