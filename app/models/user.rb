class User < ApplicationRecord
    has_many :reviews
    has_many :coffees, through: :reviews
    validates :username, presence: true 
    has_secure_password
    #  has_secure_password (Method that we get from bcrypt library. It gives us 3 methods -> password=, password_confirmation, and authenticate)
    # password= (the value for password in User params invoked password= to insert that value into the password_digest column)
   
    #password_confirmation= (A writer for our password confirmation, you'd need to include it to the frontend)
    #authenticate 

    # BCrypt takes our password, make it into a secret hash, then salts it
    # Cookies store the user's session
end


