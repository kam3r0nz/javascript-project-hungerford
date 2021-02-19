class Api::V1::SongsController < ApplicationController
    def index
        songs = Song.all
        render json: songs
    end

    def show
        song = Song.find_by(id: params[:id])
        if song
            render json: song
        else
            render json: { Error: "That song does not exist." }
        end
    end

    def create
        song = Song.create(song_params)
        render json: song
    end

    private

    def song_params
        params.require(:song).permit(:title, :artist, :album, :album_cover, :user_id)
    end

end