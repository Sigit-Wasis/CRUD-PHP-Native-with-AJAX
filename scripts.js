$(document).ready(function(){
    
    // mencoba apakah jquery berfungsi
    // alert('jquery works');

    // ketika pengguna mengklik tombol POST
    $(document).on('click', '#submit_btn', function(){
        var name = $('#name').val();
        var comment = $('#comment').val();

        $.ajax({
            url: 'server.php',
            type: 'POST',
            data: {
                'save': 1,
                'name': name,
                'comment': comment
            },
            success: function(response){
                // kosongkan kolom formulir setelah dikirim
                $('name').val('');
                $('comment').val('');

                $('#display_area').append(response);
            }
        });
    });

    // ketika pengguna mengklik tombol DELETE
    $(document).on('click', '.delete', function(){
        var id = $(this).data('id');
        var $clicked_btn = $(this);

        $.ajax({
            url: 'server.php',
            type: 'GET',
            data: {
                'delete': 1,
                'id': id
            },
            success: function(response){
                // hapus komentar yang dihapus
                $clicked_btn.parent().remove();
            }
        });
    });

    // saat tombol edit diklik
    var edit_id;
    var $edit_comment;
    $(document).on('click', '.edit', function(){ 
        // mengatur properti dari komentar yang sedang diedit
        edit_id = $(this).data('id');
        $edit_comment = $(this).parent();

        // dapatkan nama dan teks yang akan diedit
        var name = $(this).siblings('.display_name').text();
        var comment = $(this).siblings('.comment_text').text();

        // tempatkan nilai-nilai di dalam formulir
        $('#name').val(name);
        $('#comment').val(comment);

        $('#submit_btn').hide();
        $('#update_btn').show();
    });

    // kirimkan nilai yang diperbarui ke server
    $(document).on('click', '#update_btn', function(){
        var name = $('#name').val();
        var comment = $('#comment').val();

        $.ajax({
            url: 'server.php',
            type: 'POST',
            data: {
                'update': 1,
                'id': edit_id, 
                'name': name,
                'comment': comment
            },
            success: function(response){
                // kosongkan kolom formulir setelah dikirim
                $('name').val('');
                $('comment').val('');
                $('#submit_btn').show();
                $('#update_btn').hide();

                $edit_comment.replaceWith(response);
            }
        });
    });
});