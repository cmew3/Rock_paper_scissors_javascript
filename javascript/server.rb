require 'sinatra'

get '/' do
	erb :index
end

post '/play' do
	@name=params[:name]
	erb :play
end