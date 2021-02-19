class Api::V1::SongsController < ApplicationController
    before_action :set_song, only: [:show, :destroy]
    
    def index
        songs = Song.all
        render json: songs
    end

    def show
        if @song
            render json: @song
        else
            render json: { Error: "That song does not exist." }
        end
    end

    def create
        song = Song.create(song_params)
        render json: song
    end

    def destroy
        @song.destroy
        render json: @song
    end

    private

    def set_song
        @song = Song.find_by(id: params[:id])
    end

    def song_params
        params.require(:song).permit(:title, :artist, :album, :album_cover, :user_id)
    end

end