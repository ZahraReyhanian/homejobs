<aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="index3.html" class="brand-link">
        <img src="/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
             style="opacity: .8">
        <span class="brand-text font-weight-light">پنل مدیریت</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar" style="direction: ltr">
        <div style="direction: rtl">
            <!-- Sidebar user panel (optional) -->
            <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                <div class="image">
                    <img src="#" class="img-circle elevation-2" alt="User Image">
                </div>
                <div class="info">
                    <a href="#" class="d-block">{{ auth()->user()->name }}</a>
                </div>
            </div>

            <!-- Sidebar Menu -->
            <nav class="mt-2">
                <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    <!-- Add icons to the links using the .nav-icon class
                         with font-awesome or any other icon font library -->
                    <li class="nav-item has-treeview {{ isActive('admin.panel' , "menu-open")}}">
                        <a href="#" class="nav-link {{isActive('admin.panel' , "active")}}">
                            <i class="nav-icon fa fa-dashboard"></i>
                            <p>
                                داشبورد
                                <i class="right fa fa-angle-left"></i>
                            </p>
                        </a>
                        <ul class="nav nav-treeview">
                            <li class="nav-item">
                                <a href="/admin" class="nav-link {{isActive('admin.panel')}}">
                                    <i class="fa fa-circle-o nav-icon"></i>
                                    <p>خانه </p>
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li class="nav-item has-treeview {{ isActive(['admin.users.index', 'admin.users.create' , 'admin.users.edit'] , "menu-open")}}">
                        <a href="#" class="nav-link {{ isActive(['admin.users.index', 'admin.users.create' , 'admin.users.edit'])}}">
                            <i class="nav-icon fa fa-users"></i>
                            <p>
                                كاربران
                                <i class="right fa fa-angle-left"></i>
                            </p>
                        </a>
                        <ul class="nav nav-treeview">
                            <li class="nav-item">
                                <a href="{{route('admin.users.index')}}" class="nav-link {{isActive('admin.users.index')}}">
                                    <i class="fa fa-circle-o nav-icon"></i>
                                    <p>كاربران </p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="{{ route('admin.users.create') }}" class="nav-link {{ isActive('admin.users.create') }}">
                                    <i class="fa fa-circle-o nav-icon"></i>
                                    <p>ايجاد كاربر جديد</p>
                                </a>
                            </li>
                        </ul>
                    </li>

                </ul>
            </nav>
            <!-- /.sidebar-menu -->
        </div>
    </div>
    <!-- /.sidebar -->
</aside>
