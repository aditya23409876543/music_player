public class PlaylistExporter {
    public static void main(String[] args) {
        MusicPlayer player = new MusicPlayer();

        player.addSong(new Song("Dhurandhar Title Track", "Dhurandhar", "music/Dhurandhar Title Track-64kbps.mp3"));
        player.addSong(new Song("End Of Beginning", "Djo", "music/Djo - End Of Beginning (Lyrics) - Dan Music.mp3"));
        player.addSong(
                new Song("As It Was", "Harry Styles", "music/Harry Styles - As It Was (Lyrics) - The Vibe Guide.mp3"));
        player.addSong(new Song("Ishq Jalakar Karvaan", "Dhurandhar",
                "music/Ishq Jalakar Karvaan From Dhurandhar-64kbps.mp3"));
        player.addSong(new Song("Sunflower", "Post Malone, Swae Lee",
                "music/Post Malone, Swae Lee - Sunflower (Spider-Man Into the Spider-Verse) (Official Video) - PostMaloneVEVO (1).mp3"));

        player.exportToJSON("web/playlist.json");

        System.out.println("\nPlaylist created successfully!");
        System.out.println("Total songs: " + player.getPlaylistSize());
    }
}
