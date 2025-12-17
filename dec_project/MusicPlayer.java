import java.util.LinkedList;

public class MusicPlayer {
    private LinkedList<Song> playlist;

    public MusicPlayer() {
        playlist = new LinkedList<>();
    }

    public void addSong(Song song) {
        playlist.add(song);
        System.out.println("Added: " + song);
    }

    public void exportToJSON(String filename) {
        try {
            java.io.FileWriter writer = new java.io.FileWriter(filename);
            writer.write("[");
            for (int i = 0; i < playlist.size(); i++) {
                writer.write(playlist.get(i).toJSON());
                if (i < playlist.size() - 1) {
                    writer.write(",");
                }
            }
            writer.write("]");
            writer.close();
            System.out.println("Playlist exported to " + filename);
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }
    }

    public int getPlaylistSize() {
        return playlist.size();
    }
}
