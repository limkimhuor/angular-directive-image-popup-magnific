class StaticPagesController < ApplicationController
  layout :layout_by_resource

  def home
  end

  protected
  def layout_by_resource
    return "application"
    super
  end
end
