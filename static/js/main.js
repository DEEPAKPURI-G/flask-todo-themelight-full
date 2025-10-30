document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('form.confirm-delete').forEach(function(form){
        form.addEventListener('submit', function(e){
            e.preventDefault();
            const title = form.dataset.title || 'this task';
            if(confirm('Delete "' + title + '" ? This action cannot be undone.')){
                form.submit();
            }
        });
    });
    setTimeout(function(){
        document.querySelectorAll('.flash-fade').forEach(function(el){
            el.style.transition = 'opacity .6s ease, transform .4s ease';
            el.style.opacity = '0';
            el.style.transform = 'translateY(-6px)';
            setTimeout(()=> el.remove(), 700);
        });
    }, 2800);
});
