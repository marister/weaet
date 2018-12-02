class Restaurant < ApplicationRecord
  validates :name, presence: true
  validates :address, presence: true
  has_many :reviews, :dependent => :delete_all

  scope :with_reviews, -> { left_outer_joins(:reviews).distinct.select('restaurants.*, AVG(reviews.rating) as rating').group('restaurants.id') }

  def rating
    has_attribute?(:rating) ? read_attribute(:rating) : reviews.average(:rating)
  end

end
