public class Song {
    private String title;
    private String artist;
    private String fileName;

    public Song(String title, String artist, String fileName) {
        this.title = title;
        this.artist = artist;
        this.fileName = fileName;
    }

    public String getTitle() {
        return title;
    }

    public String getArtist() {
        return artist;
    }

    public String getFileName() {
        return fileName;
    }

    @Override
    public String toString() {
        return title + " - " + artist + " (" + fileName + ")";
    }

    public String toJSON() {
        String encodedFile = fileName.replace(" ", "%20");
        return "{\"title\":\"" + title + "\",\"artist\":\"" + artist + "\",\"file\":\"" + encodedFile + "\"}";
    }
}
